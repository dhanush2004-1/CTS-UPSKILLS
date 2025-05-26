import java.sql.*;
public class StudentDAO {
    Connection conn;
    public StudentDAO() throws Exception {
        conn = DriverManager.getConnection("jdbc:sqlite:students.db");
    }
    public void insert(int id, String name) throws Exception {
        PreparedStatement ps = conn.prepareStatement("INSERT INTO students VALUES(?, ?)");
        ps.setInt(1, id);
        ps.setString(2, name);
        ps.executeUpdate();
    }
    public void update(int id, String name) throws Exception {
        PreparedStatement ps = conn.prepareStatement("UPDATE students SET name=? WHERE id=?");
        ps.setString(1, name);
        ps.setInt(2, id);
        ps.executeUpdate();
    }
}
