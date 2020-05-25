<?php

//NOTE: TODO: School code is given by CEEB (check online sources)


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

function insert_school($c, $id, $n, $l)
{
    $sql = "INSERT INTO Schools (schoolID, Name, Location) VALUES (".$id.", '".$n."', '".$l."');";
    $c->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $c->exec($sql); //execute the sql inset query (insert to data base)
    return;
}

function insert_course($c, $crn, $s, $num, $name, $g, $u, $t, $y, $sid)
{
    $sql = "INSERT INTO Courses (CRN, Subject, Number, Name, Grade, Units, Term, Year, schoolID) VALUES (".$crn.", '".$s."', '".$num."', '".$name."', '".$g."', ".$u.", '".$t."', ".$y.", ".$sid.");";
    $c->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $c->exec($sql); //execute the sql inset query (insert to data base)
    return;
}

$conn = connDB();
echo 'choose: 1 (insert school), 2 (insert course), x (exit)';
$choice = rtrim(fgets(STDIN));
while($choice != "x")
{
    if($choice == "1")
    {
        echo 'insert information about a shcool \r\n';
        echo 'ID: ';
        $id = rtrim(fgets(STDIN));
        echo 'Name: ';
        $n = rtrim(fgets(STDIN));
        echo 'Location: ';
        $l = rtrim(fgets(STDIN));
        insert_school($conn, $id, $n, $l);
    }
    else if($choice == "2")
    {
        echo 'insert information about a course: \r\n';
        echo 'CRN: ';
        $crn = rtrim(fgets(STDIN));
        echo 'SUBJECT: ';
        $subject = rtrim(fgets(STDIN));
        echo 'COURSE NUMBER: ';
        $num = rtrim(fgets(STDIN));
        echo 'NAME: ';
        $name = rtrim(fgets(STDIN));
        echo 'GRADE: ';
        $g = rtrim(fgets(STDIN));
        echo 'UNITS: ';
        $u = rtrim(fgets(STDIN));
        echo 'TERM: ';
        $t = rtrim(fgets(STDIN));
        echo 'YEAR: ';
        $y = rtrim(fgets(STDIN));
        echo 'School ID: ';
        $sid = rtrim(fgets(STDIN));
        insert_course($conn, $crn, $subject, $num, $name, $g, $u, $t, $y, $sid);
    }
    else
    {
        echo 'choice does not exist';
    }

    //----- PRINT MENU AGAIN
    echo 'choose: 1 (insert school), 2 (insert course), x (exit)';
    $choice = rtrim(fgets(STDIN));
}
$c -> close(); //close connection (pointer I guess?)
?>