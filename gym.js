function gym_activity(game){
	if(game.player_data.time.hour>=1800&&game.player_data.time.hour<2200){
		game.narrate("you are in the gym, what do you do")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}},
			{name:"work out",click:function(){
				game.player_data.stats.athletic+=1
				game.narrate("you worked out for 2 hours, athletic +1")
				game.time_foward(200)
				game.set_choices([
					{name:"ok",click:function(){gym_char_interact(game)}}
				])
				
			}}
		])
	}else{
		game.narrate("gyms are open from 1800 to 2200")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}}
		])
		
	}
	
}
function gym_char_interact(game){
	game.narrate("you saw a cute girl resting on the bench on your way out")
	game.set_choices([
		{name:"leave",click:function(){game.goto("map")}},
		{name:"approach her",click:function(){
			game.narrate(`
				you approached her and said hello
				<br><br>
				girl: hi, im sayori, nice to meet you. 
				
				`);
			game.set_choices([
				{
					name:"i need a spotter",
					click:function(){
						if(game.player_data.stats.athletic<5){
							game.narrate(`
								sayori: with that build of yours, youre better off starting with the smaller dumbells. i can help you out with your form
								<br><br>
								sayori helped you with your work out. you worked out for 1 hour.
								<br><br>
								athletic +1
							`);
							game.player_data.stats.athletic+=1
							game.time_foward(100)
							game.set_choices([{name:"ok",click:function(){game.goto("map")}}])
						}else{
							game.narrate(`
								sayori: okay, sure thing
								<br><br>
								sayori helped you with your work out. she gets distracted by your muscles while youre struggling to lift. she gets flustered and snaps out of it to help you.
								<br><br>
								sayori: wah! sorry about that.
								<br><br>
								you eventually finished your work out after an hour
								<br><br>
								athletic +1
							`);
							game.player_data.stats.athletic+=1
							game.time_foward(100)
							game.set_choices([{name:"ok",click:function(){game.goto("map")}}])
						}
					}
				},
				{
					name:"youre cute. let me have your number",
					click:function(){
						if(game.player_data.stats.social_skills<5){
							game.narrate(`
								you tried to flirt but stumbled your words due to insufficent social skills 
								<br><br>
								sayori: well it was nice meeting you but ill have to go now
								<br><br>
								social skills +1
							`);
							game.player_data.stats.social_skills+=1
							game.set_choices([{name:"ok",click:function(){game.goto("map")}}])
						}else{
							game.narrate(`
								sayori: oh, uh, thanks for the compliment. you can have it
								<br><br>
								added sayori to contacts
							`);
							game.player_data.friend_list.push("sayori")
							game.set_choices([{name:"ok",click:function(){game.goto("map")}}])
						}
					}
				}
			])
			
		}}
	])
}