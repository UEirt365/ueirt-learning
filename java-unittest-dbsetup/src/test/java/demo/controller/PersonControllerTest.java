package demo.controller;

import com.ninja_squad.dbsetup.operation.Insert;
import demo.test_setup.ApiControllerTestBase;
import demo.test_setup.TestConstants.Table.Person;
import org.junit.Test;

import static com.ninja_squad.dbsetup.Operations.insertInto;

public class PersonControllerTest extends ApiControllerTestBase {

    @Test
    public void test() throws Exception {
        System.out.println(get("/test/get").andReturn().getResponse().getContentAsString());

        Insert insertBuilder = insertInto(Person.TABLE_NAME)
                .columns(Person.Column.ID, Person.Column.NAME, Person.Column.GENDER, Person.Column.AGE)
                .values(1, "Viet", "male", 20)
                .build();
        initDb(insertBuilder);

        System.out.println(get("/test/test").andReturn().getResponse().getContentAsString());
    }
    @Test
    public void test_post() throws Exception {
        System.out.println(post("/test/post").andReturn().getResponse().getContentAsString());

        Insert insertBuilder = insertInto(Person.TABLE_NAME)
                .columns(Person.Column.ID, Person.Column.NAME, Person.Column.GENDER, Person.Column.AGE)
                .values(1, "Viet", "male", 20)
                .values(2, "Nam", "female", 20)
                .build();
        initDb(insertBuilder);

        System.out.println(post("/test/post").andReturn().getResponse().getContentAsString());
    }
}
