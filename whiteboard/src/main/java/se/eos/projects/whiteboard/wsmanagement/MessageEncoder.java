package se.eos.projects.whiteboard.wsmanagement;

import java.util.Collection;

import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

import se.eos.projects.whiteboard.models.PostIt;

public class MessageEncoder implements Encoder.Text<Collection<PostIt>> {

	@Override
	public String encode(Collection<PostIt> postIts) throws EncodeException {
		
		JsonArrayBuilder jsonArrayBuilder = Json.createArrayBuilder();
		
	    for(PostIt postIt : postIts) {
	    	jsonArrayBuilder.add
		    	(Json.createObjectBuilder()	    			
		            .add("id", postIt.getId())
		            .add("subject", postIt.getSubject())
		            .add("info", postIt.getInfo())
		            .add("color", postIt.getColor())      
	        );	    	
	    }
	     		
	    return jsonArrayBuilder.build().toString();

	}

	@Override
	public void init(EndpointConfig ec) {
		System.out.println("MessageEncoder - init method called");
	}

	@Override
	public void destroy() {
		System.out.println("MessageEncoder - destroy method called");
	}

}