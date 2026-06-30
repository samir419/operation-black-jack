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
			{text:`
				5 people are seated in a board room meeting. 
				<br><br>
				guest 1: so, why’d you call us here. 
				<br><br>
				host: there has been an unprecedented event. something that could threaten the fabric of reality itself. 
				<br><br>
				guest 2: huh? 

			`,bg_img:"assets/lair.webp"},
			{text:`
				host: I have sensed an anomaly. something that isn't supposed to exist in this world. if it isn't dealt with immediately, it could corrupt the world around us. 
				<br><br>
				guest 3: this is. unlike any threat we've had to face, is it? 
				<br><br>
				host: no, this anomaly poses a threat on the cosmic scale. I can sense that it's influence hasn't spread to a wide radius yet. we need to apprehend it before it spreads any further. 
				<br><br>
				guest 1: so, what's the plan. 

			`},
			{text:`
				host: you four, are the finest agents I can count on for this task. I've managed to pinpoint the source of the corruption. it's coming from the international highschool in capital city. 
				<br><br>
				guest 2 raised her eyebrows in suprise
				<br><br>
				guest 2: a high school? 

			`},
			{text:`
				host: unfortunately so, you must do what you can not to cause any civil unrest in your operation. it must be kept confidential from the public. and as for how we're gonna go about this operation. you four are to infiltrate the institution and find out who or what this anomaly is. bring them alive if you can, otherwise reveal their identity to me. is that clear? 
				<br><br>
				all the hosts: yes your honor
				<br><br>
				host: good, this meeting is dismissed. 

			`},
			{text:`inside the high school.`,bg_img:"assets/school.jpg"},
			{text:`
				The students pause their chatter as the head master walks into the class room with you. 
				<br><br>
				head master: good morning students 
				<br><br>
				students: good morning Mr Bickley 
				<br><br>
				Mr bickley: I'd like to introduce your new class mate who just transfered here.

			`,bg_img:"assets/class.jpg",char_img:"assets/chars/kael1.png"},
			{text:`
				The students turn over to you. you can hear whispering among them. 
				<br><br>
				Mr bickley: would you kindly introduce yourself. 
			`,choices:[
					{name:"next",func:function(){game.player_data.name=prompt("enter your name")}},
				]},
			{text:`
				you introduce yourself to the class. 
				<br><br>
				Mr bickley: now then {player_name}, go ahead and have your seat. I'm sure the students can show you around during the break. 

			`},
			{text:`
				you go ahead to sit at the table close to the middle of the class. 
				<br><br>
				The home room teacher then turns her attention to you. 
				<br><br>
				home room teacher: Alright {player_name}, my names miss lizbeth. let me tell you how things work in the school. right after class you can go ahead and join a club for extra curiclar activities. you can partake in as many clubs as you want. but make sure to make time to study alright? 
				<br><br>
				you nod your head

			`,char_img:"assets/chars/smile.png"},
			{text:`
				you managed to make it through your first. day of school. consider checking out the after school club activities. 

			`,choices:[
				{name:"leave",func:function(){
				game.player_data.time.hour=1500;game.update_player_data();
				game.player_data.story_progress+=1
				game.goto("map")
			}}
			]},
		]
	]

	let chapter_2 = [
		[
			{text:`
					The class is going on normally until the principal walks in again with another student.
					<br><br>
					Mr bickley: good morning students. Glad to see were all working hard. Id like to introduce you to your new transfer student. 
					<br><br>
					Mr bickley turned to the new student. 
					<br><br>
					Mr bickley: please, kindly introduce yourself.
		
				`,bg_img:"assets/class.jpg"},
				{text:`
					The student walked forward and struck a rather dramatic pose to emphasize her self. 
					<br><br>
					Student: i am justine! Im looking forward to getting to know all of you!
					<br><br>
					The students looked at her in awe. They started whispering among themselves. 
		
		
				`},
				{text:`
					Mr bickley: well thats quite the introduction. Well now do we have an extra seat for miss justine over here.
					<br><br>
					Other classmate: ooh, ooh, come here, come here 
					<br><br>
					A group of students from the right side of the class called for justine to sit next to them. 
		
		
				`},
				{text:`
					You over heard the students next to you whispering.
					<br><br>
					Student 1: wow that new girl is so hot.
					<br><br>
					Student 2: who wouldve thought wed get two consecutive transfer students. But the second one has definitely blown the class away.
		
				`},
				{text:`
					A little while after lunch break. Youre walking down the hall way to your class. You see justine surrounded by several class mates, all asking trivial questions about her.
		
				`},
				{text:`
					You over hear two other students walking infront of you.
					<br><br>
					Student 1: hey, did you know that three other students also transferred her on the same day as justine.
					<br><br>
					Student 2: huh? That oughta be a silly coincidence. Could they all be related to her?
					<br><br>
					Student 1: they all look nothing alike. Two of them are in the third year. I heard one of them has already joined the student council as the presidents advisor. And the other has become a varsity player for the volleyball team.
					<br><br>
					Student 2: whoa thats crazy. 
		
				`},
				{text:`
					You remember seeing the council president standing beside another student and over looking all the second and first years during lunch time. The advisor appeared to be looking for some one in the crowd.
		
				`},
				{text:`
					school has ended now. what do you want to do. 
				`,choices:[
					{name:"leave",func:function(){
					game.player_data.time.hour=1500;game.update_player_data();
					game.player_data.story_progress+=1
					game.goto("map")
				}}
				]},
			]
	]

	let chapter_3 = [
		[
			{text:`
					All the students are called to the conference room for a morning assembly.
					<br><br>
					The students are all bickering among themselves speculating about whats going on.
					<br><br>
					The microphone screeches and catches everyones attention.
					<br><br>
					The council president, along with his advisor and the head master stand infront of the microphone.
		
				`,bg_img:"assets/school.jpg"},
				{text:`
					president : good morning students. I hope were all doing well. Im here to announce a coming event we will be holding in the next week. Our prestigious sports competition. 
					<br><br>
					President: i hope to see all of you participating in the event. It is a good opportunity to test your athletic abilities and bond with your class mates. Now, well have a closing word from our head master.
		
				`},
				{text:`
					You hear mr bickley go on and on about the spirit of sportsmanship and team work. 
					<br><br>
					You head back to class and continue your schedule.
		
				`},
				{text:`
					Later after break time, youre heading back to your class when you run into another student.
					<br><br>
					Student: hmm... are you a player?
					<br><br>
					The student looks at you in a weird way.
		
				`,bg_img:"assets/clss.jpg"},
				{text:`
					Student: you dont belong to this world do you? Youre an outsider.
		
				`,choices:[
					{name:"huh?",func:function(){path = chapters[game.player_data.story_progress][1];i=-1}},
					{name:"yes i am",func:function(){path = chapters[game.player_data.story_progress][2];i=-1;game.player_data.suspicion+=1}}
				]}
			],
		[//path 1
			{text:`
				Justine: hey hilbert! What do you think youre doing
				<br><br>
				Justine rushes in to interrupt the conversation.
				<br><br>
				Justine: sorry about him. Hes acts kinda weird sometimes. Please dont take it personal

			`,choices:[
				{name:"its fine, im not bothered",func:function(){path = chapters[game.player_data.story_progress][3];i=-1}},
				{name:"do you guys know each other?",func:function(){path = chapters[game.player_data.story_progress][4];i=-1}}
			]},
		],
		[//path 2
			{text:`
				Justine: hey hilbert! What do you think youre doing
				<br><br>
				Justine rushes in to interrupt the conversation.
				<br><br>
				Justine: sorry about him. Hes acts kinda weird sometimes. Please dont take it personal

			`},
			{text:`
				Hilbert: he said it. Hes the anomaly
				<br><br>
				Justine: oh would you shut up she says in a aggressive whisper
				<br><br>
				Your suspicion meter has gone up.

			`,choices:[
				{name:"its fine, im not bothered",func:function(){path = chapters[game.player_data.story_progress][3];i=-1}},
				{name:"do you guys know each other?",func:function(){path = chapters[game.player_data.story_progress][4];i=-1}}
			]}
		],
		[// path 3
			{text:`
				Justine: im glad you understand. Well, ill see you later in class okay

			`,choices:[
				{name:"next",func:function(){path = chapters[game.player_data.story_progress][5];i=-1}},
			]}
		],
		[// path 4
			{text:`
				Justine: well yeah. We all grew up in the same neighbourhood. Our parents are so close that they took us to the same school. *flusters* but dont you get the wrong idea, im not wierd.
				<br><br>
				Justine nervously scratches her head
				<br><br>
				Justine: anyways, ill see you in class later

			`,choices:[
				{name:"next",func:function(){path = chapters[game.player_data.story_progress][5];i=-1}},
			]}
		],
		[//path 5
			{text:`
				You decide to leave them and head back to class.
				<br><br>
				the rest of your day went smoothly. what do you plan to do after school
			`,choices:[
					{name:"leave",func:function(){
					game.player_data.time.hour=1500;game.update_player_data();
					//game.player_data.story_progress+=1
					game.goto("map")
				}}
				]}
		]
	]

	

	let chapters = [chapter_1,chapter_2,chapter_3]
	
	path = chapters[game.player_data.story_progress][0]
	
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
