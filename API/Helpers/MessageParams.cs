using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
<<<<<<< HEAD
    public class MessageParams : PaginationParams
=======
    public class MessageParams:  PaginationParams
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
    {
        public string Username { get; set; }
        public string Container { get; set; } = "Unread";
    }
}