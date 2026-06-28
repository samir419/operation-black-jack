function cafe_activity(game){
	if(game.player_data.time.hour>=600&&game.player_data.time.hour<2000){
		game.narrate("you are in the cafe, what do you do")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}},
			{name:"buy food",click:function(){
				game.player_data.money-=10
				game.narrate("you spent 10$ on food")
				game.time_foward(100)
				
			}}
		])
	}else{
		game.narrate("clubs are open from 600 to 2000")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}}
		])
	}
	
}