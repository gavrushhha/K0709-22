import math
import numpy
import matplotlib.pyplot as plt

# 1
def bisect(fun, a, b, eps):
    fa = fun(a)
    fb = fun(b)
    if fa*fb > 0.:
        print("Bad interval [%f, %f]" % (a,b))
        return 0.
    while (b-a)/2 > eps:
        c = (b+a)/2
        fc = fun(c)
        if fc == 0: break
        if fa*fc > 0:
            a = c
            fa = fc
        else:
            b = c
            fb = fc
    return (b+a)/2

print('\n', 'Задание 1:')
print(bisect(lambda x: x**3-9, -10, 10, 1e-6),
      bisect(lambda x: 3*x**3+x**2-x-5, -10, 10, 1e-6),
      bisect(lambda x: (math.cos(x))**2+6-x, -10, 10, 1e-6))



# 2
def f1(x): return 2*x**3 - 6*x - 1
def f2(x): return numpy.exp(x-2) + x**3 - x
def f3(x): return 1 + 5*x - 6*x**3 - numpy.exp(2*x)

print('\n', 'Задание 2:')
print(bisect(f1, -2, -1, 1e-6), bisect(f1, 1, 2, 1e-6))
print(bisect(f2, -2, -1, 1e-6))
print(bisect(f3, 0, 1, 1e-6))

x = numpy.linspace(-3, 3, 1000)
plt.figure(figsize=(14, 8))

# f1(x)
plt.subplot(3, 1, 1)
plt.plot(x, f1(x), label="2x^3 - 6x - 1 = 0")
plt.axhline(0, color='black',linewidth=0.5)
plt.title('2x^3 - 6x - 1')
plt.grid(True)

# f2(x)
plt.subplot(3, 1, 2)
plt.plot(x, f2(x), label="e^(x-2) + x^3 - x = 0", color="orange")
plt.axhline(0, color='black',linewidth=0.5)
plt.title('e^(x-2) + x^3 - x')
plt.grid(True)

# f3(x)
plt.subplot(3, 1, 3)
plt.plot(x, f3(x), label="1 + 5x - 6x^3 - e^(2x) = 0", color="green")
plt.axhline(0, color='black',linewidth=0.5)
plt.title('1 + 5x - 6x^3 - e^(2x)')
plt.grid(True)

plt.tight_layout()
plt.show()



# 3
def cub_root(x, a):
    return x**3 - a

print('\n', 'Задание 3:')
print(bisect(lambda x: cub_root(x, 2), 1, 2, 1e-8),
      bisect(lambda x: cub_root(x, 3), 1, 3, 1e-8),
      bisect(lambda x: cub_root(x, 5), 1, 5, 1e-8))



# 4

R = 1
V_given = 1

def segment_volume(h):
    return numpy.pi * h**2 * (R - h/3) - V_given

h_solution = bisect(segment_volume, 0, 2 * R, 0.001)
print('\n', 'Задание 4:')
print(h_solution)
