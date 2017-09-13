using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationBasic.Controllers
{
    [Route("api/[controller]")]
    public class SongsController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<SongUrl> AllSongs()
        {
            return Enumerable.Range(1, 50).Select(index => new SongUrl
            { 
                TrackUrl = "http://azaza.com/" + index
            });
        }

        [Route("mp3/{songName}")]
        public VirtualFileResult GetSong(string songName)
        {
            var filepath = Path.Combine("~/files", songName);
            return File(filepath, "audio/mpeg", songName);
        }

        public class SongUrl
        {
            public string TrackUrl { get; set; }
        }
    }
}
