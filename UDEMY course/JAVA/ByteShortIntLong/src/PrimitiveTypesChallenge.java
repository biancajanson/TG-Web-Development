public class PrimitiveTypesChallenge {

    public static void main(String[] args) {
        byte myByteValue = 10;
        short myShortValue = 20;
        int myIntValue = 50;

        long myLongValue = 50000L + 10L * (myByteValue + myShortValue + myIntValue);
        System.out.println(myLongValue);
    }
}
