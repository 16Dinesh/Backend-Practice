# age = int(input("Enter your age: "))

# if age <= 13:
#     print("You are not eligible to drink.")
# elif age > 18:
#     print("You are eligible to drink.")
# else:
#     print("You are not allowed to drink.")

# age = int(input("Enter your age: "))
# vote = ("yes you can vote", "no you can't")[age < 18]

# str="dinesh"
# print(len(str))
# print(str[1])
# print(str[3:7])
# print(str.endswith("sh"))
# print(str.capitalize())
# print(str.replace("dinesh","varsha"))
# print(str.find("n"))
# print(str.count('i'))

# name = input("enter your Name : ")

# fullName = name.capitalize()
# print("your Name : ",fullName , len(fullName))

# marks = int(input("Marks : "))

# if(marks >= 90 ):
#     print("your Grade is 'A'")
# elif(90 > marks >= 80) :
#     print("your Grade is 'B'")
# elif(80> marks >= 70) :
#     print("your Grade is 'C'")
# else :
#     print("your Grade is 'D")

# odd or even 

# num = int(input("Enter the number "))
# if(num % 2 == 0) :
#     print("EVEN")
# else :
#     print("ODD")

# marks = [21,22,3,2,12,123,32,21,33,21,21]
# # print(marks[2])
# # print(len(marks))
# marks.append(69)
# marks.reverse()
# marks.pop()
# marks.insert(2,8008)
# marks.remove(3)
# print(marks)

# user = input("movie name : ")
# stroage = []
# stroage.append(user)
# print(stroage)
# print(type(stroage))

# Check palindrome
# print("Checking if your name is a palindrome or not")

# name = input("Enter your name: ")
# reversed_name = name[::-1]
# if name == reversed_name:
#     print("YOUR NAME IS A PALINDROME:", name)
# else:
#     print("Your name is not a palindrome:", name)

# name  = {
#     "name" : "Dinesh",
#     "age" : 21,
#     "knownLanguage" : ["English", "Hindi", "Telugu", "Tamil"]
# }

# name.update({"hand": "right Hander"})
# print(name.items())

# col = set() 

# col.add("D")
# col.add("I")
# col.add("E")
# col.add("S")
# col.add("N")
# col.add("N")
# col.add("H")
# #col.pop()
# col.remove("N")
# print(col)


# num = {1,2,2,3,3,4,5,55,55,5,}
# print(type(num))
# print(num)

# store = {} 
# store.update({"table" : ["a piece of furniture"
# ,"list of facts & figures"],
# "cat": "a small animal"})
# print(store)

# count = 1 
# while count <= 5:
#     print("Dinesh")
#     count += 1

# y = 32


# idx = 0
# print("total list of marks are : ", marks)
# for x in marks :
#     if (x == y ) :
#         print("Marks are found ", x)
#         break
#         idx += 1
#     else : 
#         print("Not found")


# using range   
# for i in range(0,101,5):
#     print(i)

# pass
# for i in range(0,101,5):
#     pass
# print("Good Moring")

#functions 

# def sum (a, b) :
#     s= a + b 
#     return s
# print(sum(1,2))

# print("Dinesh", end=" ")
# print("is a good Boy")

# def convert(usd) :
#     inr = usd * 83
#     format =  print("USD is :",usd, "INTO INR is :", inr)
#     return format
# convert(20)


# recusion

# def show(n) :
#     if (n ==0) :
#         return
#     print(n)
#     show(n-1)
# show(5)

# def fact(n) :
#     if(n == 0 or n==1):
#         return 1
#     else :
#         return n * fact(n-1)
    
    
# print(fact(5))

