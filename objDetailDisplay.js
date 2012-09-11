
function addToHtml(dest, content){
	dest.html(dest.html()+content);	
}

function buildInfoTable(targetObject, name){	
	var tableString = '<div id="dv'+name+'" class="shadowbox" style="display:inline-block;">' 
		+'<table id="tb'+name+'" style="border:1px solid black;">'
		+'<tr><th id="thTitle'+name+'" colpan="4">'+name+'</th></tr>'
		+'<tr><th>Name</th><th>Type</th><th>Value</th><th>+/-</th></tr>';
	for(obj in targetObject){		
		objType = typeof targetObject[obj];		
		tableString+='<tr><td>'+obj+'</td><td>'+objType+'</td><td>';		
		if(objType=='function'){			
		}
		else if(objType=='object'){
			tableString+=buildInfoTable(targetObject[obj], obj);
			//for(childObj in targetObject[obj]){
			//	tableString+=childObj+'<br/>';
			//}
			tableString+= targetObject[obj];
			//if( getElementById(targetObject[obj].id)){
			//	tableString+='<input type="button" value="+" onclick="addToHtml($(\'#bodyMain\'),buildInfoTable($(\'#'
			//		+targetObject[obj].id+'\'),"'+obj+'")">';
			//}			
		}
		else{			
			tableString+=targetObject[obj];
		}
		tableString+='</td><td>-</td></tr>';
	}
	tableString+="</table></div>";		
	return tableString;
}