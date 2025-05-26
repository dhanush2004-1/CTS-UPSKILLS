public class TypeCasting{

    public static void main(String[] args) {
        double myDouble = 10.987;
        int intFromDouble = (int) myDouble;
        System.out.println("Original double: " + myDouble);
        System.out.println("Casted to int: " + intFromDouble);

        int myInt = 25;
        double doubleFromInt = (double) myInt;
        System.out.println("Original int: " + myInt);
        System.out.println("Casted to double: " + doubleFromInt);
    }
}