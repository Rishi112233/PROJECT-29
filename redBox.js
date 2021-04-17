
class redBox extends Box
{
    constructor(x,y)
    {
        super(x,y,20,30);
    }
        display()
        {
            fill(255,75,75);
            super.display();
        }
}