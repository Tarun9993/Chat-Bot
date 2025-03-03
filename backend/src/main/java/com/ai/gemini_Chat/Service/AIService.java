package com.ai.gemini_Chat.Service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class AIService {

	//Access to APIKEY AND URL [GEMINI]
	@Value("${gemini.api.url}")
	private String geminiApiUrl;
	@Value("${gemini.api.key}")
	private String geminiApiKey;
	
	private final WebClient webClient;
	
	
	
	public AIService(WebClient.Builder webClient) {
		super();
		this.webClient = webClient.build();
	}



	public String getAnswer(String question) {
		
		Map<String, Object> requestBody = Map.of(
				"contents", new Object[] {
						Map.of("parts", new Object[] {
								Map.of("text",question)
						})
				}
				);
		
		//Make API Call
		
		String response =  webClient.post()
		 .uri(geminiApiUrl + geminiApiKey)
		 .header("Content-Type", "application/json")
		 .bodyValue(requestBody)
		 .retrieve()
		 .bodyToMono(String.class)
		 .block();
		return response;
	}

}
