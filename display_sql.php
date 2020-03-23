<?php
/// ----------------- IF CATCHERS ---------------------///
if($_POST == "dispByGrade") by_grade(connDB());
if($_POST == "dispByName") by_name(connDB());
if($_POST == "dispBySubject") by_subject(connDB());



/// ------------- FUNCTIONS ------------------ ///
    function by_grade($conn)
    {
        $sql = "SELECT DISTINCT FirstName, LastName, patID FROM Patrons";
        $stmt = $conn -> prepare($sql);
        $stmt -> execute(); ///execute the query to the database
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
        { //concatinate to huge string to be passed //concatinaton in php is done with '.='
            $all_options .= "<option class = 'pull-left ddOption' value = '".$row['FirstName']."".$row['LastName']."'>".$row['FirstName']." ".$row['LastName']."      -       ".$row['patID']."</option><br>";
        }
        return $all_options; //return the final string to echo on the html page
        return;
    }
    function by_subject($conn)
    {
        return;
    }
    function by_name($conn)
    {
        return;
    }
    function connDB() //call to get connection
{
    $username = "root";
    $password = "MMB3189@A";
    $dsn = 'mysql:dbname=Shahafs;host=127.0.0.1;port=3306;socket=/tmp/mysql.sock';  

    //try and catch block to connect to MySQL, or throw an error
    try {
        $conn = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        echo 'Connection Failed: ' . $e -> getMessage();
    } // end of try and catch
    return $conn;
}
?>