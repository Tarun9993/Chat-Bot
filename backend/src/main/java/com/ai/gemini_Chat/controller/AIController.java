package com.ai.gemini_Chat.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ai.gemini_Chat.Service.AIService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/qna")
public class AIController {

	@Autowired
	private AIService service;
	
	@PostMapping("/ask")
	public ResponseEntity<String> askQuestion(@RequestBody Map<String,String> payload){
		String question = payload.get("question");
		String answer = service.getAnswer(question);
		return ResponseEntity.ok(answer);
		
	}
}
