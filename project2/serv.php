<?php
    $con=mysqli_connect("localhost","root","","eventdb");
    if(isset($_POST['obj'])){
        $per=json_decode($_POST['obj1'],true);
        if($per!=null){
            $mx="INSERT INTO objectevents(type) VALUES ('$per')";
            $mx=mysqli_query($con,$mx);
        }
    }
    if(isset($_GET['obj1'])){
        $mx="SELECT * FROM objectevents";
        $mx=mysqli_query($con,$mx);
        if($mx->num_rows>0){
            $storedData="";
            while($row=$mx->fetch_assoc()){
                if($row['type']!=null)
                    $storedData.=$row['type'];
            }
            echo json_encode($storedData);
        }
        else
            echo "No data to retgrieve";
    }
?>