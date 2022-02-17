public class Animal {
    String animalName;
    int animalAge;
    static String type = "Animal";

    public void feed() {

    }

    public void visitVet() {

    }

    public Animal(String name, int age) {
        this.animalName = name;
        this.animalAge = age;
        System.out.println("The name of this animal is " + name + " and he/she is " + age + " years old.");
    }
}
