function class_activity(game){
	function finifsh_class(){
		game.player_data.time.hour=1500
		game.update_player_data()
		game.narrate("you studied in class")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}}
		])
	}
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
			{name:"attend",click:function(){
				volume_1(game)
			}}
		])
	}else{
		game.narrate("classes are open from 700 to 1500")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}}
		])
	}
	
}

function volume_1(game){
	let path = []
	let i=0

	let chapter_1 = [
		[
			{text:"game narration 1",bg_img:"assets/school.jpg"},
			{text:"game narration 2"},
			{text:"game narration 3", choices:[
				{name:"choice 1",func:function(){console.log("func 1")}},
				{name:"choice 2",func:function(){console.log("func 2")}}
			]},
			{text:"game narration 4"},
			{text:"game narration 5", choices:[
				{name:"choice 1",func:function(){
				game.player_data.time.hour=1500;game.update_player_data();
				game.player_data.story_progress+=1
				game.goto("map")
			}}
			]},
		]
	]

	let chapter_2 = [
		[
			{text:"chapter 2 game narration 1"},
			{text:"game narration 3", choices:[
				{name:"choice 1",func:function(){path=chapter_2[1];i=-1}},
				{name:"choice 2",func:function(){path=chapter_2[2];i=-1}}
			]},
			
		],
		[
			{text:"chapter 2 path 2"},
			{text:"game narration 5", choices:[
				{name:"choice 1",func:function(){game.player_data.time.hour=1500;game.update_player_data();game.goto("map")}}
			]},
		],
		[
			{text:"chapter 2 path 3"},
			{text:"game narration 5", choices:[
				{name:"choice 1",func:function(){game.player_data.time.hour=1500;game.update_player_data();game.goto("map")}}
			]},
		]
	]

	let chapters = [chapter_1,chapter_2]
	
	path = chapters[game.player_data.story_progress][0]
	
	function set_narration(){
		if(!path[i])return
		game.narrate(path[i].text)
		if(path[i].bg_img){
			game.set_background(path[i].bg_img)
		}
		let choice_data = []
		if(path[i].choices){
			for(let j=0;j<path[i].choices.length;j++){
				choice_data.push({
					name:path[i].choices[j].name,
					click:function(){
						path[i].choices[j].func()
						i+=1
						set_narration()
					}
				})
			}
		}else{
			choice_data.push({name:"next",click:function(){i+=1;set_narration()}})
		}
		game.set_choices(choice_data)
	}
	set_narration()
}