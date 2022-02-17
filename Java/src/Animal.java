public class Animal {
    String animalName;
    int animalAge;
    static String type = "Animal";

    public void feed() {
        System.out.println("Feed this animal...");
    }

    public void visitVet() {
        System.out.println("This animal must see the vet...");
    }

    public Animal(String name, int age) {
        this.animalName = name;
        this.animalAge = age;
        System.out.println("The name of this animal is " + name + " and he/she is " + age + " years old.");
    }

    public static void main(String[] args){

    }

}
