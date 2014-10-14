package se.eos.projects.whiteboard.controllers;

import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import se.eos.projects.whiteboard.models.Message;
import se.eos.projects.whiteboard.models.PostIt;

public class PostItController {

	static int id = 0;

	static Set<PostIt> postItSetCollection = Collections
			.synchronizedSet(new HashSet<PostIt>());

	public void addPostIt(Message message) {

		PostIt postItToCreate = new PostIt();

		id = id + 1;

		postItToCreate.setId(id);
		postItToCreate.setSubject(message.getSubject());
		postItToCreate.setInfo(message.getInfo());
		postItToCreate.setColor(message.getColor());

		postItSetCollection.add(postItToCreate);

	}

	public void removePostIt(Message message) {

		PostIt postItToDelete = new PostIt();
		
		postItToDelete = searchPostIt(message);		
		postItSetCollection.remove(postItToDelete);
		System.out.println("size of collection: " + postItSetCollection.size());

	}

	public void updatePostIt(Message message) {

		PostIt postItToUpdate = new PostIt();

		postItToUpdate = searchPostIt(message);
		
		postItToUpdate.setId(message.getId());
		postItToUpdate.setSubject(message.getSubject());
		postItToUpdate.setInfo(message.getInfo());
		postItToUpdate.setColor(message.getColor());
		
		postItSetCollection.add(postItToUpdate);

	}

	public PostIt searchPostIt(Message message) {	
		for (PostIt postIt : postItSetCollection) {					
			if (postIt.getId() == message.getId()) {								
				return postIt;				
			}							
		}
		return null;
	}

	public Collection<PostIt> getAllPostIts() {
		return postItSetCollection;
	}

}
