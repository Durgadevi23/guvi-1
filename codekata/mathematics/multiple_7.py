#number is a multiple of 7
#function to find the multiple
def mult(n):
#condition to check whether it divisible
    if(n%7==0):
        return "yes"
    else:
        return "no"
#get the number from the user
n=int(input())
print(mult(n))
