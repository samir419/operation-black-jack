function artclub_activity(game){
	if(game.player_data.current_day==6){
		game.narrate("clubs are closed on sundays")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}}
		])
		return
	}
	if(game.player_data.time.hour>=1500&&game.player_data.time.hour<1800){
		game.narrate("you are in the <yellow>art club</yellow>, what do you do")
		
		let choices = [
			{name:"back",click:function(){game.goto("map")}}
		]
		
		if(!game.player_data.art_club_story_completed){
			choices.push({
				name:"attend",
				click:function(){
					artclub_story(game)
				}
			})
		}else{
			choices.push({
				name:"draw",
				click:function(){
					game.player_data.time.hour=1800
					game.player_data.stats.creativity+=1
					game.update_player_data()
					game.narrate("you spent time drawing, creativity +1")
					game.set_choices([
						{name:"back",click:function(){game.goto("map")}}
					])
				}
			})
		}
		game.set_choices(choices)
	}else{
		game.narrate("clubs are open from 1500 to 1800")
		game.set_choices([
			{name:"back",click:function(){game.goto("map")}}
		])
	}
}

function artclub_story(game){
	let path = []
	let i=0

	let chapter_1 = [
		[ // path 0: Introduction
			{text:`
				You step into the art club room. The air smells faintly of oil paint and turpentine. 
				<br><br>
				The walls are decorated with vibrant paintings, but the room itself is quiet. In the corner, a girl is working on a large canvas.
			`,bg_img:"assets/school.jpg",char_img:"assets/chars/erza.png"},
			{text:`
				She seems completely lost in her painting, her brush strokes swift and intense. 
				<br><br>
				As you walk closer, you look at the canvas. It's a surreal depiction of a dark, void-like rift opening up in a classroom, with shadowy figures staring into it.
				<br><br>
				It looks eerily like the anomaly you're investigating.
			`},
			{text:`
				You notice her breathing is shallow, as if she is painting under a trance. 
				<br><br>
				What do you want to do?
			`,choices:[
				{name:"cough to get her attention",func:function(){path = chapter_1[1];i=-1}},
				{name:"silently observe the painting",func:function(){path = chapter_1[2];i=-1}}
			]}
		],
		[ // path 1: Cough to get attention
			{text:`
				You clear your throat loudly.
				<br><br>
				You: Ahem...
				<br><br>
				The girl startles, her brush slipping and leaving a small streak of blue on the canvas. She turns around quickly.
			`,char_img:"assets/chars/angry.png"},
			{text:`
				Girl: Oh! You startled me. I... get a bit too focused sometimes.
				<br><br>
				She wipes a smudge of paint from her cheek, letting out a sigh.
				<br><br>
				Girl: I'm Erza. The president, and well, the only active member of the Art Club.
			`,char_img:"assets/chars/smile.png"},
			{text:`
				Erza looks at you with curiosity.
				<br><br>
				Erza: Are you a new student? I haven't seen you around here before.
			`},
			{text:`
				What do you say to Erza?
			`,choices:[
				{name:"Ask about her strange painting",func:function(){path = chapter_1[3];i=-1;game.player_data.suspicion+=1}},
				{name:"Say you're interested in joining",func:function(){path = chapter_1[4];i=-1;game.player_data.stats.creativity+=1}}
			]}
		],
		[ // path 2: Silently observe
			{text:`
				You stand back and watch her paint without saying a word.
				<br><br>
				Her concentration is absolute. However, as she steps back to examine her work, she suddenly spots you standing there.
			`,char_img:"assets/chars/smile.png"},
			{text:`
				Girl: Ah! Oh my, you scared me! How long have you been standing there?
				<br><br>
				She laughs nervously, her face flushing slightly.
				<br><br>
				Girl: I'm Erza, the head of this club. I get completely lost in the canvas.
			`},
			{text:`
				Erza points at her painting of the cosmic void.
				<br><br>
				Erza: So, what do you think? It's... a bit unusual, isn't it?
			`,choices:[
				{name:"It looks like a crack in reality",func:function(){path = chapter_1[3];i=-1;game.player_data.suspicion+=1}},
				{name:"It's beautiful. The colors are great",func:function(){path = chapter_1[5];i=-1;game.player_data.stats.creativity+=2}}
			]}
		],
		[ // path 3: Ask about the strange painting (suspicion path)
			{text:`
				You point at the dark void in her painting.
				<br><br>
				You: That rift... why did you paint it? It looks like a real anomaly.
				<br><br>
				Erza's expression changes, becoming guarded. She steps in front of the canvas as if to hide it.
			`,char_img:"assets/chars/angry.png"},
			{text:`
				Erza: It's just a painting. A dream I had. Why are you asking so intensely?
				<br><br>
				She looks at you suspiciously. 
				<br><br>
				Erza: You're acting a bit weird, like those third-year students who keep wandering around the halls.
			`},
			{text:`
				You realize you might have pushed too hard. You need to salvage the situation.
			`,choices:[
				{name:"Apologize and ask to join the club",func:function(){path = chapter_1[4];i=-1}},
				{name:"Change the subject and leave",func:function(){path = chapter_1[6];i=-1}}
			]}
		],
		[ // path 4: Ask to join/paint
			{text:`
				You: I'd love to join the club and learn how to paint like that.
				<br><br>
				Erza's face immediately brightens. She claps her hands together.
			`,char_img:"assets/chars/smile.png"},
			{text:`
				Erza: Really? That would be wonderful! It's been so lonely here. 
				<br><br>
				She quickly grabs a spare easel and places a fresh canvas on it, handing you a brush and a palette.
				<br><br>
				Erza: Here, try painting something. Show me what's in your mind!
			`},
			{text:`
				You take the brush. What do you want to paint?
			`,choices:[
				{name:"Paint a peaceful school landscape",func:function(){path = chapter_1[7];i=-1;game.player_data.stats.creativity+=1}},
				{name:"Paint a dark boardroom with 5 figures",func:function(){path = chapter_1[8];i=-1;game.player_data.suspicion+=1}}
			]}
		],
		[ // path 5: Praise her painting
			{text:`
				You: It's beautiful. The contrast between the dark void and the school colors is incredible.
				<br><br>
				Erza smiles, visibly pleased.
			`,char_img:"assets/chars/smile.png"},
			{text:`
				Erza: Thank you! Most people find my recent style a bit unsettling. I appreciate you saying that.
				<br><br>
				She hands you a brand-new sketchbook and some high-quality sketching pencils.
				<br><br>
				Erza: Since you have an eye for art, why don't you try sketching with me?
			`},
			{text:`
				You take the sketchpad and sit next to her. What do you decide to draw?
			`,choices:[
				{name:"Draw a peaceful school landscape",func:function(){path = chapter_1[7];i=-1;game.player_data.stats.creativity+=1}},
				{name:"Draw a dark boardroom with 5 figures",func:function(){path = chapter_1[8];i=-1;game.player_data.suspicion+=1}}
			]}
		],
		[ // path 6: Change subject and leave early
			{text:`
				You: Never mind, I just got lost. I should probably head out.
				<br><br>
				Erza nods slowly, still looking slightly suspicious.
			`,char_img:"assets/chars/angry.png"},
			{text:`
				Erza: Alright. The door is that way. Have a good evening.
				<br><br>
				You leave the art club room. Even though you didn't paint, you feel like you learned something about the school's atmosphere.
			`,choices:[
				{name:"leave",func:function(){
					game.player_data.time.hour=1800;
					game.player_data.art_club_story_completed=true;
					game.update_player_data();
					game.goto("map");
				}}
			]}
		],
		[ // path 7: Painted a peaceful landscape
			{text:`
				You paint the school courtyard under the afternoon sun, filled with cherry blossoms.
				<br><br>
				Erza looks over your shoulder, nodding approvingly.
			`,char_img:"assets/chars/smile.png"},
			{text:`
				Erza: Oh, this is lovely! The light is so warm. You have a very calming style.
				<br><br>
				You spend the rest of the afternoon painting and talking about art techniques. You feel your creativity flowing.
			`},
			{text:`
				As the clock strikes 1800, you finish your painting.
				<br><br>
				Erza: That was a lot of fun. Make sure you come back to the club again, okay?
			`,choices:[
				{name:"leave",func:function(){
					game.player_data.time.hour=1800;
					game.player_data.art_club_story_completed=true;
					game.player_data.stats.creativity+=2;
					game.update_player_data();
					game.goto("map");
				}}
			]}
		],
		[ // path 8: Painted the dark boardroom
			{text:`
				You paint a dark boardroom with five figures seated around a long table, with a glowing anomaly in the center.
				<br><br>
				Erza looks at your painting, her eyes widening in shock. She drops her palette.
			`,char_img:"assets/chars/angry.png"},
			{text:`
				Erza: This... how do you know about this room? I've seen this exact boardroom in my recurring dreams!
				<br><br>
				She stares at you, trembling slightly.
				<br><br>
				Erza: Who... who are you really?
			`},
			{text:`
				Before you can answer, she quickly brushes past you and packs her things.
				<br><br>
				Erza: I think we should end the club session early today. I need some time to think.
			`},
			{text:`
				You apologize and leave the room, realizing you might have revealed too much.
			`,choices:[
				{name:"leave",func:function(){
					game.player_data.time.hour=1800;
					game.player_data.art_club_story_completed=true;
					game.update_player_data();
					game.goto("map");
				}}
			]}
		]
	]

	path = chapter_1[0]
	
	function set_narration(){
		if(!path[i])return
		let nar_text=path[i].text.replace("{player_name}", game.player_data.name);
		game.narrate(nar_text)
		if(path[i].bg_img){
			game.set_background(path[i].bg_img)
		}
		if(path[i].char_img){
			game.set_character_image(path[i].char_img)
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