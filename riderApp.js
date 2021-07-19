const input = require('readline-sync')
console.log('\n******* Happy Uber Ride ********')
let place_list = ['Huskur','Electronic city','Sarjapura','D-Mart',]

for (let value of place_list){
    console.log(value)
}
let count1 = 0
let count2 = 0
let count3 = 0
let kilometers1 = 0
let kilometers2 = 0
let kilometers3 = 0
function ride(){
    var c = 0
    console.log('*******Your Riders*******')
    var rider1_place = place_list[Math.floor(Math.random() * place_list.length)];
    var rider2_place = place_list[Math.floor(Math.random() * place_list.length)];
    var rider3_place = place_list[Math.floor(Math.random() * place_list.length)];
    console.log(`${c+1} nayak is stand in ${rider1_place}\n${c+2} kumar is stand in ${rider2_place}\n${c+3} rahul is stand in ${rider3_place}\n`)
}
function chose_rider(){
    ride()
    console.log('You have to chose any one option')
    console.log('1.Boking\n2.Cancel')
    let chose = input.question('Enter your option 1 or 2: ')
    if (chose == '1'){
        let Rider_option = Number(input.question("Enter your rider_choice for Boking  who is near by you:=> 1 or 2 or 3: "))
        if (Rider_option == 1){
            count1 = count1+1
            km1 = Number(input.question('Enter how much kilometers for rider_1 : '))
            kilometers1 += km1
        }
        else if (Rider_option == 2){
            count2 = count2+1
            km2 = Number(input.question('Enter how much kilometers for rider_2 : '))
            kilometers2 += km2
        }
        else if (Rider_option == 3){
            count3 = count3+1
            km3 = Number(input.question('Enter how much kilometers for rider_3 : '))
            kilometers3 += km3
        }
        console.log('If you want to again boking')
        chose_rider()
    }
    else if (chose == '2'){
        return ('Cancel')
    }    
}
chose_rider()
function owner_choice(){
    let owner_choice = input.question("Enter Owner choce to who's wants to check 1 or 2 or 3: ")
    let rupee_per_km = 5
    if (owner_choice == '1'){
        if (count1 >= 1){
            console.log('***************************')
            console.log(`Today Rider_1 did ${count1} rides`)
            console.log(`The Rider_1 did ${count1} rides for ${kilometers1}km`)
            console.log(`Total Amount for Ride_1 =>${rupee_per_km*kilometers1} `)
        }
        else{
            console.log('***************************')
            console.log(`Today Rider_1 did ${0} rides`)
            console.log(`The Rider_1 rode ${0}km`)
            console.log(`Total Amount Earned Rider_1=> ${0} `)
        }
    }
    else if (owner_choice == '2'){
        if (count2 >= 1){
            console.log('***************************')
            console.log(`Today Rider_2 did ${count2} rides`)
            console.log(`The Rider_2 did ${count2} rides for ${kilometers2} km`)
            console.log(`Total Amount for Rider_2 => ${rupee_per_km*kilometers2}`)
        }
        else{
            console.log('***************************')
            console.log(`Today Rider_2 did ${0} rides`)
            console.log(`The Rider_2 rode ${0}km`)
            console.log(`Total Amount Earned Rider_2 => ${0}`)
        }
    }
    else if (owner_choice == '3'){
        if (count3 >= 1){
            console.log('\n***************************')
            console.log(`Today Rider_3 did ${count3} rides`)
            console.log(`The Rider_3 did ${count3} rides for ${kilometers3} km`)
            console.log(`Total Amount for Rider_3 =>${rupee_per_km*kilometers3}`)
        }
        else{
            console.log('\n***************************')
            console.log(`Today Rider_3 did ${0} rides`)
            console.log(`The Rider_3 rode ${0} km`)
            console.log(`Total Amount Earned Rider_3 => ${0}`)
        }
    }
}
function again(){
    option = input.question('Enter yes OR no if you want to again book:  ')
    if (option =='y'){
        chose_rider()
        again()
    }
    if (option =='n'){
        return 'Thank you'
    }
}
again()
function owner_choice2(){
    console.log('\n***************************')
    let owner_choice_again = input.question('If owner wants to know details of riders: Y/N:')
    if (owner_choice_again == 'y'){
        owner_choice()
        owner_choice2()
    }
    else{
        console.log('#################### THANK YOU #########################')
        return 'Thank you'
    }
}
owner_choice2()