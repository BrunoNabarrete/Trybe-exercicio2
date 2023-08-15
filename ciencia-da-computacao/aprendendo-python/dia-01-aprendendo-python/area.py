pi = 3.14

def square(x):
    return x * x

def rectangle(length, width):
    return length * width

def circle(radius):
    return pi * radius * radius

if __name__ == "__main__":
    print("Area of square: ", square(10))
    print("Area of rectangle: ", rectangle(2, 2))
    print("Area of circle: ", circle(3))
