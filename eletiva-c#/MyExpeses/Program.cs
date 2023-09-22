class Program
{
  public double CalculateBMI(int weight, int height)
  {
    return weight / (height * height);
  }

  public int CalculateAge(int yearOfBirth)
  {
    return DateTime.Now.Year - yearOfBirth;
  }
}