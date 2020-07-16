age = 25

if (age == 25):
    print(age)

name = "Snoop Dog"

if (name == "Snoop Dog"):
    print(name)

if (age <= 25):
    print(age)

if (age != 25):
    print(age)

if (age < 25):
    print(age)
    

if True: 
    print("True")
else: 
    print("False")

if age >= 21:
  print("You get free beer")
else:
  print("Sorry no beer for you")  

if age >= 21:
  print("You get free beer")
elif age < 18:
  print("What are you even doing here?")
else:
  print("Sorry no beer for you")

count = 0

while count < 10:
  count += 1
  print("The count is", count)
print("Done")

answer = ''

while answer != 'when':
  answer = input('Say when: ')
  answer = answer.lower()
  print("That's not when. Try again.")
  if answer == 'when':
    print('Goodbye')
    break

user_input = ''

while True:
  user_input = input('Say when: ')
  if user_input.lower() == 'when':
    break
print("Bye")