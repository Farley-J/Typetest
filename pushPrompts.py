import json

# Data to be written
data = [{
	
        "text": "Bright stars twinkle in the clear night sky as the gentle breeze rustles the leaves. The tranquil night is perfect for reflection, with every star telling its own unique story of the universe's vastness.",
    	"wordcount": 34,
        "charcount" : 203 
    },
    {
        "text": "The gentle sound of rain tapping against the windowpane creates a calming atmosphere. It’s a perfect moment for relaxation and reflection. With a warm cup of tea in hand, one can truly appreciate the simplicity and tranquility of these rainy afternoons.",
    	"wordcount": 41,
     	"charcount" : 253
    },
    {
        "text":"Amidst the bustling city streets, the serene park offers a peaceful retreat from the chaos. The vibrant colors of the flowers and the soothing melodies of birds create an oasis of calm. Visitors can enjoy leisurely walks, picnics, or simply sit and appreciate nature’s beauty in this urban sanctuary.",
    	"wordcount": 49,
     	"charcount" : 300
    },
    {
        "text": "Technology continues to advance at an astonishing rate, reshaping our daily lives and interactions. From smartphones and smart homes to artificial intelligence and virtual reality, the innovations are endless. Each breakthrough brings new possibilities and challenges, requiring us to adapt and learn continuously. Embracing these changes can lead to exciting opportunities and a deeper understanding of our digital world.",
    	"wordcount": 59,
     	"charcount" : 422
    },
    {
        "text": "Exploring the depths of the ocean reveals a world teeming with wonder and mystery. Bioluminescent creatures light up the dark waters, while vibrant coral reefs provide a colorful backdrop to the diverse marine life. Submersibles and advanced diving equipment allow scientists to study these underwater ecosystems, offering insights into their complex interactions and the effects of environmental changes on ocean health.",
    	"wordcount": 61,
     	"charcount" : 421
    },
    {
        "text": "In a small, quiet town nestled between rolling hills and lush forests, life moves at a slower pace. The community comes together for seasonal festivals, farmer’s markets, and outdoor activities. Residents know each other by name, and there’s a strong sense of belonging. The picturesque landscape and friendly atmosphere make it an ideal place for those seeking a serene and close-knit environment.",
    	"wordcount": 62,
     	"charcount" : 398
    },
    {
        "text": "The journey of personal growth involves both challenges and triumphs. Embracing new experiences, learning from setbacks, and continually striving for improvement are key aspects of this journey. Each step forward, no matter how small, contributes to a greater understanding of oneself and one’s capabilities. Building resilience and a positive mindset can transform obstacles into opportunities, leading to a more fulfilling and purposeful life.",
    	"wordcount": 63,
     	"charcount" : 445
    },
    {
        "text": "Books have a unique power to transport readers to different worlds and eras. Through captivating stories and vivid descriptions, they allow us to experience adventures, emotions, and perspectives beyond our own. Reading enriches our lives and broadens our horizons in countless ways.",
    	"wordcount": 42,
     	"charcount" : 283
    },
    {
        "text": "Traveling offers a chance to explore new cultures, cuisines, and landscapes. Each destination presents unique experiences, from bustling cities and historical landmarks to serene countryside and breathtaking natural wonders. Embracing the diversity of the world can lead to personal growth and a deeper appreciation for global perspectives.",
    	"wordcount": 47,
     	"charcount" : 340
    },
    {
		"text":"Gardening is more than just a hobby; it’s a rewarding way to connect with nature and cultivate patience. Whether tending to a small balcony garden or a sprawling backyard, the process of planting, nurturing, and harvesting can be incredibly satisfying. Observing the growth of plants and enjoying their fruits or flowers fosters a sense of accomplishment and tranquility. Gardening also contributes to environmental well-being and provides fresh, homegrown produce.",
		"wordcount": 69,
     	"charcount" : 465
	}
]


# Writing to sample.json
with open("prompts.json", "w") as file:
	json.dump(data, file, indent=4)