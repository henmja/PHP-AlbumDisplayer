function listAlbums() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // decode JSON response
            var result = JSON.parse(xhr.responseText);
            var ul = document.getElementById("albumlist");
            for (var i = 0; i < result.length; i++) {
                var li = document.createElement("li");
                li.innerHTML = "<a href='#' onclick=\"showAlbum('" + result[i].band + "')\">" + result[i].artist + " - " + result[i].title + "</a> ";
                ul.appendChild(li);
            }
        }
    };
    xhr.open("GET", "albums.php", true);
    xhr.send(null);
}

function showAlbum(band) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","albuminfo.php?album="+band,true);
    xhr.send();

    xhr.onreadystatechange=function() {
        if (xhr.readyState==4 && xhr.status==200) {
            // decode JSON response
            var result = JSON.parse(xhr.responseText);
            console.log(result);
            var str = "<div id = 'album_cover'> <img src='images/" + result.cover + "' /> </div>";

            str += "<div id ='album_songs'>";
            str += "<table>";
            str += "<tr>";
            str += "<th>No.</th>";
            str += "<th>Name</th>";
            str += "<th>Length</th>";
            str += "</tr>";

            for (var i = 0; i < result.songs.length; i++) {
                str += "<tr>";
                str += "<td>" + result.songs[i].song_num  + "</td>";
                str += "<td>" + result.songs[i].song_title  + "</td>";
                str += "<td>" + result.songs[i].song_length  + "</td>";
                str += "</tr>";
            }

            str += "<tr> ";
            str += "<td colspan='2'><strong>Total length:</strong></td> ";
            str += "<td class='song_length'><strong>" + result.total +  "</strong></td> ";
            str += "</tr>";

            str +=  "</table> </div>";

            document.getElementById("album_info").innerHTML = str;
        }
    }
}
