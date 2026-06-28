function class_activity(game){
	if(game.player_data.current_day>4){
		game.narrate("classes are open on week days")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}}
		])
		return
	}
	if(game.player_data.time.hour>=700&&game.player_data.time.hour<1500){
		game.narrate("you are in <yellow>class</yellow>, what do you do")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}},
			{name:"study",click:function(){
				game.player_data.time.hour=1500
				game.update_player_data()
				game.narrate("you studied in class")
				game.set_choices([
					{name:"back",click:function(){game.goto("map")}}
				])
			}}
		])
	}else{
		game.narrate("classes are open from 700 to 1500")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}}
		])
	}
	
}