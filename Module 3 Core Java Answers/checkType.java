public class PatternSwitch {
    static void checkType(Object obj) {
        switch (obj) {
            case Integer i -> System.out.println("Integer");
            case String s -> System.out.println("String");
            case Double d -> System.out.println("Double");
            default -> System.out.println("Unknown");
        }
    }
    public static void main(String[] args) {
        checkType("hello");
        checkType(10);
        checkType(3.14);
    }
}
