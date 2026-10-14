import { McpServer } from '@modelcontextprotocol/server';
import { createMcpHandler } from 'agents/mcp/server';
import { z } from 'zod';
import { documentation, findDocs, patterns, reviewCode } from './tools';
const response = (value:unknown)=>({ content:[{type:'text' as const,text:JSON.stringify(value)}] });
function createServer() {
 const server=new McpServer({name:'SAP Integration Helper',version:'0.2.0'});
 server.registerTool('search_sap_references',{description:'Search a small, curated catalog of official SAP help and SAP architecture URLs. Offline index; not a live documentation search.',inputSchema:{query:z.string().min(2).max(160)},annotations:{readOnlyHint:true,destructiveHint:false,openWorldHint:false}},async({query})=>response({liveSearch:false,results:findDocs(query),notice:'Open the listed SAP URLs to check current capabilities.'}));
 server.registerTool('get_integration_architecture',{description:'Retrieve one of three curated read-only integration architecture patterns with explicit implementation caveats.',inputSchema:{scenario:z.enum(['idoc-to-b2b','successfactors-to-identity','api-to-agent'])},annotations:{readOnlyHint:true,destructiveHint:false,openWorldHint:false}},async({scenario})=>response({scenario,...patterns[scenario],source:documentation[0].url}));
 server.registerTool('review_integration_code',{description:'Run limited static heuristics on Groovy or XSLT. Does not execute, compile, transform, or access SAP tenant.',inputSchema:{language:z.enum(['groovy','xslt']),code:z.string().min(1).max(10000)},annotations:{readOnlyHint:true,destructiveHint:false,openWorldHint:false}},async({language,code})=>response(reviewCode(language,code)));
 return server;
}
const handler=createMcpHandler(createServer,{route:'/mcp'});
export default {fetch(request:Request,env:unknown,ctx:ExecutionContext){const path=new URL(request.url).pathname;if(path==='/health'&&request.method==='GET')return Response.json({status:'ok',service:'SAP Integration Helper MCP',mode:'read-only',version:'0.2.0'});if(path!=='/mcp')return new Response('Not found',{status:404});return handler(request,env,ctx);}} satisfies ExportedHandler;
