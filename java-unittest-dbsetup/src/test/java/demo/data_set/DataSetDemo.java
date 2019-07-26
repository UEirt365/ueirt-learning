package demo.data_set;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import org.dbunit.database.DatabaseConnection;
import org.dbunit.database.IDatabaseConnection;
import org.dbunit.database.QueryDataSet;
import org.dbunit.dataset.xml.FlatXmlWriter;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringRunner;

import javax.inject.Inject;
import javax.sql.DataSource;
import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.DriverManager;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestExecutionListeners({DbUnitTestExecutionListener.class})
public class DataSetDemo {
    private Connection getConnection() throws Exception {
        Class.forName("com.mysql.jdbc.Driver");
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/test_schema", "root", "password");
    }

//    @Inject
//    private DataSource dataSource; // working when remove @TestExecutionListeners({DbUnitTestExecutionListener.class})

    @Test
    public void test_export_xml() throws Exception {
//        Connection conn = dataSource.getConnection();
        Connection conn = getConnection();
        IDatabaseConnection dbunit_conn = new DatabaseConnection(conn);
        QueryDataSet exportDataSet = new QueryDataSet(dbunit_conn);
        exportDataSet.addTable("person");
        QueryDataSet outputSet = new QueryDataSet(new DatabaseConnection(conn));
        outputSet.addTable("person", "SELECT * FROM person");
//        FlatXmlDataSet.write(outputSet, System.out); // write system out
        FlatXmlWriter flatXmlWriter = new FlatXmlWriter(new FileOutputStream("/home/nguyen.dinh.trieu/Works/Study/ueirt-learning/java-unittest-dbsetup/src/test/resources/temp.xml"));
        flatXmlWriter.write(outputSet);
    }

    @Test
    @DatabaseSetup("classpath:/temp.xml")
    public void test_import_xml() {
        System.out.println("OK");
    }
}
