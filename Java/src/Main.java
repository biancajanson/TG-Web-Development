import java.util.ArrayList;

public class Main {

    /*public static void main(String[] args) {
        System.out.println("Hello World");
    }*/

    /*
    int x = 5;
    int y = 3;

    public static void main(String[] args) {
        Main myObj1 = new Main();
        Main myObj2 = new Main();
        System.out.println(myObj1.x);
        System.out.println(myObj2.y);
    } */

    // Single line comment
    /* Multi line
    comment */

    /*
    int x;

    public static void main(String[] args) {
        Main myObj = new Main();
        myObj.x = 40;
        System.out.println(myObj.x);


    } */
    /*
    int x = 10;

    public static void main(String[] args) {
        Main myObj = new Main();
        myObj.x = 25;
        System.out.println(myObj.x);
    } */

    /*
    final int x = 10;

    public static void main(String[] args) {
        Main myObj = new Main();
        myObj.x = 25; //error, omdat int als final gedeclareerd staat
        System.out.println(myObj.x);
    } */
    /*
    String fname = "John";
    String lname = "Doe";
    int age = 24;

    public static void main(String[] args) {
        Main myObj = new Main();
        System.out.println("Name: " + myObj.fname + " " + myObj.lname);
        System.out.println("Age: " + myObj.age);
    }
*/
    /*
    static void myMethod() {
        System.out.println("I just got executed!");
    }

    public static void main(String[] args) {
        myMethod();
        myMethod();
        myMethod();
    }
    */
    /*
    int modelYear;
    String modelName;

    // constructor
    public Main(int year, String name) {
        modelYear = year;
        modelName = name;
    }

    public static void main(String[] args) {
        Main myCar = new Main(1969, "Mustang");
        System.out.println(myCar.modelYear + " " + myCar.modelName);
    } */
    /*
    // 2-Dimentional Array
    public static void main(String[] args) {
        String[][] cars = {{"Kia", "Honda"}, {"BMW", "Renault", "Volkswagen"}};
        System.out.println(cars[1][0]);
    } */

    //ArrayList, bovenin je bestand importeer je de code van de ArrayList uit de java.util package
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<>();
        cars.add("Kia");
        cars.add("Honda");
        cars.add("BMW");
        cars.add("Renault");
        cars.add("Volkswagen");
        System.out.println(cars);
    }
}
