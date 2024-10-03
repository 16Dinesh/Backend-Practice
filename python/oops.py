# class Studentv : 
#     name = "Dinesh"

# SI = Studentv()
# print(type(SI.name))
# print(SI.name)


# class Student :
#     def __init__(self, fullName) :
#         self.name = fullName

#     def hello(self) :
#         print("Hello ", self.name)

# s1 = Student("Dinesh")
# s1.hello()

class Student : 
    name = "Unkown"

    @classmethod
    def name(self, name) :
        self.name = name

p1 = Student()
p1.name("dinesh")
print(p1.name)