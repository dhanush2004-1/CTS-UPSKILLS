import java.util.*;
public class RecordDemo {
    record Person(String name, int age) {}
    public static void main(String[] args) {
        List<Person> people = List.of(new Person("Alice", 30), new Person("Bob", 20));
        for (Person p : people) System.out.println(p);
        people.stream().filter(p -> p.age() > 25).forEach(System.out::println);
    }
}
