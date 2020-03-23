<?php
/// ------------- FUNCTIONS ------------------ ///
    function by_grade($conn)
    {
        $all_courses = ""; //initiatde, declaration
        $sql = "SELECT Subject, Number, Name, Grade FROM Courses ORDER BY Grade";
        $stmt = $conn -> prepare($sql);
        $stmt -> execute(); ///execute the query to the database
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
        { //concatinate to huge string to be passed //concatinaton in php is done with '.='
            $$all_courses .= "<option class = 'pull-left ddOption' value = '".$row['FirstName']."".$row['LastName']."'>".$row['FirstName']." ".$row['LastName']."      -       ".$row['patID']."</option><br>";
        }
        return $all_courses; //return the final string to echo on the html page
    }

    function by_subject($conn)
    {
        $all_courses = ""; //initiatde, declaration
        $sql = "SELECT Subject, Number, Name, Grade FROM Courses ORDER BY Subject";
        $stmt = $conn -> prepare($sql);
        $stmt -> execute(); ///execute the query to the database
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
        { //concatinate to huge string to be passed //concatinaton in php is done with '.='
            $$all_courses .= "<option class = 'pull-left ddOption' value = '".$row['FirstName']."".$row['LastName']."'>".$row['FirstName']." ".$row['LastName']."      -       ".$row['patID']."</option><br>";
        }
        return $all_courses; //return the final string to echo on the html page
        return;
    }

    function by_name($conn)
    {
        $all_courses = ""; //initiatde, declaration
        $sql = "SELECT Subject, Number, Name, Grade FROM Courses ORDER BY Name";
        $stmt = $conn -> prepare($sql);
        $stmt -> execute(); ///execute the query to the database
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
        { //concatinate to huge string to be passed //concatinaton in php is done with '.='
            $$all_courses .= "<option class = 'pull-left ddOption' value = '".$row['FirstName']."".$row['LastName']."'>".$row['FirstName']." ".$row['LastName']."      -       ".$row['patID']."</option><br>";
        }
        return $all_courses; //return the final string to echo on the html page
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