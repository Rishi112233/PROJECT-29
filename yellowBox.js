
class yellowBox extends Box
{
    constructor(x,y)
    {
        super(x,y,20,30);
    }
        display()
        {
            fill(255,248,42);
            super.display();
        }
}