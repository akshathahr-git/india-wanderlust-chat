
export interface QuickReply {
  id: string;
  text: string;
}

export interface ChatBotResponse {
  id: string;
  message: string;
}

export const welcomeMessage = "Namaste! 🙏 I'm your Incredible India Guide. I can help you explore the wonders of India, from the majestic Himalayas to the serene beaches of Kerala. How can I assist you with your Indian travel plans today?";

export const quickReplies: QuickReply[] = [
  { id: "rajasthan", text: "Top places in Rajasthan" },
  { id: "kerala", text: "5-day Kerala itinerary" },
  { id: "food", text: "Best street food in Delhi" },
  { id: "season", text: "Best time to visit Darjeeling" },
  { id: "transport", text: "How to reach Andaman Islands" },
  { id: "budget", text: "Budget travel tips for India" },
];

export const chatbotResponses: Record<string, ChatBotResponse> = {
  "rajasthan": {
    id: "rajasthan-response",
    message: "Rajasthan is a treasure trove of cultural heritage! Here are the top places to visit:\n\n1. **Jaipur** - The Pink City with Amber Fort, Hawa Mahal, and City Palace\n2. **Udaipur** - The City of Lakes with Lake Pichola and City Palace\n3. **Jaisalmer** - The Golden City with its magnificent fort and sand dunes\n4. **Jodhpur** - The Blue City with Mehrangarh Fort\n5. **Pushkar** - Famous for its sacred lake and Brahma Temple\n\nI recommend spending at least 7-10 days to explore these gems of Rajasthan. Would you like more details about any specific city?"
  },
  "kerala": {
    id: "kerala-response",
    message: "Here's a perfect 5-day Kerala itinerary:\n\n**Day 1**: Arrive in Kochi, explore Fort Kochi, watch Kathakali performance\n**Day 2**: Drive to Munnar, visit tea plantations and Eravikulam National Park\n**Day 3**: Munnar to Thekkady, spice plantation tour, evening boat ride in Periyar Lake\n**Day 4**: Drive to Alleppey, check into a houseboat for an overnight stay in the backwaters\n**Day 5**: Disembark and head to Marari or Varkala beach for relaxation\n\nBest time to visit is between September and March when the weather is pleasant. Would you like recommendations for accommodations in these areas?"
  },
  "food": {
    id: "food-response",
    message: "Delhi is a paradise for street food lovers! Here are the must-try spots:\n\n1. **Chandni Chowk** - Try the famous parathas at Paranthe Wali Gali, chaat at Natraj Dahi Bhalle, and jalebi at Old Famous Jalebi Wala\n2. **Karim's in Old Delhi** - For authentic Mughlai cuisine\n3. **Anil ki Chole Bhature in Kamla Nagar** - For the best chole bhature\n4. **Dilli Haat** - For diverse regional cuisines\n5. **Khan Market** - Try the famous Khan Chacha kebabs\n\nFor the best experience, consider joining a guided food walk. Would you like more specific recommendations based on your food preferences?"
  },
  "season": {
    id: "season-response",
    message: "The best time to visit Darjeeling is from March to May and October to December.\n\n**March to May (Spring)**: Pleasant weather with temperatures between 10°C-20°C. The rhododendrons and orchids are in full bloom, making the hillsides colorful. Perfect for outdoor activities and clear views of Kanchenjunga.\n\n**October to December (Autumn/Early Winter)**: Clear skies offer the best views of the Himalayan range, especially Kanchenjunga. Temperatures range from 5°C-15°C.\n\nAvoid the monsoon season (June to September) as heavy rainfall can cause landslides and foggy conditions obscure mountain views."
  },
  "transport": {
    id: "transport-response",
    message: "To reach the Andaman Islands:\n\n**By Air**: The fastest way is to fly to Port Blair from major cities like Chennai, Kolkata, Delhi, or Bangalore. Flights operate daily and take about 2-2.5 hours from Chennai or Kolkata.\n\n**By Sea**: You can also take a ship from Chennai, Kolkata, or Visakhapatnam to Port Blair. The journey takes about 3-4 days depending on weather conditions.\n\nOnce in Andaman, you can travel between islands by:\n- Government ferries (economical but limited schedule)\n- Private ferries (more expensive but frequent)\n- Helicopters (for remote islands, needs advance booking)\n\nDo you need information about inter-island transportation as well?"
  },
  "budget": {
    id: "budget-response",
    message: "Here are some budget travel tips for India:\n\n1. **Travel in off-season**: Prices for accommodation and activities drop significantly\n2. **Use local transport**: Trains and state buses are very economical\n3. **Stay in hostels or guesthouses**: Many budget options available in most tourist destinations\n4. **Eat at local eateries**: Street food and local restaurants offer authentic and cheap meals\n5. **Free activities**: Many temples, parks, and beaches are free to visit\n6. **Bargain**: Always negotiate prices at markets\n7. **Get an Indian SIM card**: Avoid roaming charges\n8. **Book trains in advance**: They fill up quickly, especially during peak season\n\nFor a budget traveler, $25-30 per day can cover basic accommodation, food, and transport. Would you like budget recommendations for a specific region?"
  },
};

export const fallbackResponses = [
  "I'd be happy to help you with that! Could you provide a bit more detail about what you're looking for?",
  "That's a great question about India! Let me find some information for you. Could you tell me more about your specific interests?",
  "I'm still learning about all the wonderful places in India. Could you rephrase your question?",
  "India has so much to offer! To give you the best advice, could you tell me more about what type of experience you're looking for - adventure, culture, food, or relaxation?",
  "I want to make sure I give you the most accurate information. Could you be a bit more specific about your question?"
];

export function getFallbackResponse(): string {
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
}
