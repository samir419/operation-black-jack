function artclub_activity(game){
	if(game.player_data.current_day==6){
		game.narrate("clubs are closed on sundays")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}}
		])
		return
	}
	if(game.player_data.time.hour>=1500&&game.player_data.time.hour<1800){
		game.narrate("you are in the art club, what do you do")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}},
			{name:"play",click:function(){
				game.player_data.time.hour=1800
				game.player_data.stats.creativity+=1
				game.update_player_data()
				game.narrate("you spent time drawing, creativity +1")
				game.set_choices([
					{name:"back",click:function(){game.goto("map")}}
				])
			}}
		])
	}else{
		game.narrate("clubs are open from 1500 to 1800")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}}
		])
	}
}