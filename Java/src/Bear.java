public class Bear extends Animal {
    String type;
    int weight;

    public Bear(String name, int age, String typeBear) {
        super(name, age);
        this.type = typeBear;
        System.out.println("The name of the bear is " + name + ", he/she is " + age + " years old and he/she's of type " + typeBear + ".");
    }

    public void showType() {
        System.out.println("Type from Bear class: " + this.type);
        System.out.println("Type from Animal class: " + Animal.type);
    }

    public static void main(String[] args) {
        Bear brownBear = new Bear("Pooh", 25, "Brown Bear");
        Bear polarBear = new Bear("Lars", 18, "Polar Bear");
    }
}
