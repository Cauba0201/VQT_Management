using Microsoft.AspNetCore.Mvc;
using VQTManagement.Server.Models;


namespace VQTManagement.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        public static List<Users> users = new List<Users>();

        //method GET thêm dữ liệu được mà hóa vào URI, method POST dữ liệu được nối vào phần body chứ không vào URI
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(users);
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id) 
        {
            try {
                var clinet = users.SingleOrDefault(user => user.Id == id);
                if (clinet == null)
                {
                    return NotFound();
                }
                return Ok(clinet);
            } catch {
                return BadRequest();
            }
            
        }

        [HttpPost]  
        public IActionResult Create([FromBody] Users user)
        {
            user.Id = users.Count + 1;
            users.Add(user);

            return Ok(new { Success = true, Data = user });
        }
        [HttpPut("{id}")]
        public IActionResult Edit(int id, Users userEdit)
        {
            try
            {
                var clinet = users.SingleOrDefault(user => user.Id == id);
                if (clinet == null)
                {
                    return NotFound();
                }
                if (id != clinet.Id) {
                    return BadRequest();
                }
                //Update
                clinet.Id = userEdit.Id;
                clinet.FirstName = userEdit.FirstName;
                clinet.LastName = userEdit.LastName;
                clinet.Province = userEdit.Province;
                clinet.Email = userEdit.Email;
                clinet.Phone = userEdit.Phone;
                clinet.City = userEdit.City;

                return Ok();
            }
            catch
            {
                return BadRequest();
            }

        }
        [HttpDelete("{id}")]
        public IActionResult Remove(int id) {
            try
            {
                var clinet = users.SingleOrDefault(user => user.Id == id);
                if (clinet == null)
                {
                    return NotFound();
                }
                if (id != clinet.Id)
                {
                    return BadRequest();
                }
                //Update
                users.Remove(clinet);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
