## Possion process
---
#### Definition：
$$
\begin{align}
% \linespread{1.25}
& P\{X(t+s)-X(t)=n\} = e^{-\lambda t} \cdot \frac{(\lambda s)^n}{n!} \\ 
& P\{X(t+h)-X(t)=1\} = \lambda h+o(h) \\ 
& P\{X(t+h)-X(t)=2\} = o(h) \\ 
\end{align}
$$
#### Figure：
![possion process](..\Redalpaca_Blog\img\blog\blog_2\blog_2_0.png)
#### Drawing code：
```Python
def draw_possion_3d(N = 50, T0 = 3, time_step, time_span):
    #y = np.array()
    z = []
    xx = np.arange(0, N)                                    # range of n
    yy = np.arange(T0, T0+time_span, time_step)             # range of t
    X, Y = np.meshgrid(xx, yy)                              # generate 2darray for 3d drawing
    for i in range(0, int(time_span/time_step)):
        poisson = stats.poisson(mu = T0 + time_step * i)    # mu = lambda
        z.append(poisson.pmf(xx))
    z = np.array(z)
    
    fig = plt.figure() 
    ax3 = plt.axes(projection='3d')
    ax3.plot_surface(X,Y,z,cmap='rainbow')
    plt.title('poisson process', size = 15)
    plt.xlabel('n', size = 15)
    plt.ylabel('t', size = 15)

    plt.show()
    pass
```