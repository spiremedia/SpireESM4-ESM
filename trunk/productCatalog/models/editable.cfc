<cfcomponent name="model" output="false" extends="resources.abstractEditableModel">
	<cffunction name="init">
		<cfargument name="requestObj" required="true">
		<cfargument name="userObj" required="true">
		
		<cfset super.init(requestObj, userObj, '{
			"fields":{
				"moduleaction":{"label":"ma","validation":"notblank"},
				"taxonomyitemid":{"label":"Catalog","validation":"notblank"}
			}
		}')>
		
		<cfreturn this>
	</cffunction>
</cfcomponent>