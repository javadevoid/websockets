package se.eos.projects.whiteboard.wsmanagement;

import java.io.IOException;

import javax.websocket.CloseReason;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import javax.websocket.EncodeException;

import se.eos.projects.whiteboard.models.Message;
import se.eos.projects.whiteboard.controllers.PostItController;

@ServerEndpoint(value = "/postit", decoders = { MessageDecoder.class }, encoders = { MessageEncoder.class })
public class ServerEndPoint {

	static PostItController postItCtrl = new PostItController();

	static int id = 0;

	@OnOpen
	public void onOpen(Session session) {

		System.out.println("New websocket opened: " + session.getId());
		
		sendMessage(session);
		
	}

	@OnMessage
	public void onMessage(Message message, Session session) {

		switch (message.getService()) {
		case "create":
			postItCtrl.addPostIt(message);
			break;
		case "delete":
			postItCtrl.removePostIt(message);
			break;
		case "update":
			postItCtrl.updatePostIt(message);
			break;

		default:
			break;
		}

		sendMessage(session);

	}

	public void sendMessage(Session session) {
		try {
			for (Session currentSession : session.getOpenSessions()) {
				if (currentSession.isOpen()) {
					try {
						System.out.println("collection= " + postItCtrl.getAllPostIts());
						currentSession.getBasicRemote().sendObject(postItCtrl.getAllPostIts());
					} catch (IOException | EncodeException e) {
						System.out.println(e.toString());
					}

				} 
			}

		} catch (Exception e) {
			System.out.println(e.toString());
		}
	}
	
	@OnClose
	public void onClose(CloseReason reason, Session session) {

		System.out.println("Closing a WebSocket due to: "
				+ reason.getReasonPhrase());

	}

	@OnError
	public void onError(Session session, Throwable throwable) {
		System.out.println("Error");
	}

}