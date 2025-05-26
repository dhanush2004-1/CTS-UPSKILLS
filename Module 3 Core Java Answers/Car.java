class Car {
    String make;
    String model;
    int year;
    void displayDetails() {
        System.out.println(make + " " + model + " " + year);
    }
    public static void main(String[] args) {
        Car c = new Car();
        c.make = "Toyota";
        c.model = "Corolla";
        c.year = 2020;
        c.displayDetails();
    }
}
