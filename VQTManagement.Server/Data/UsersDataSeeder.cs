using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using VQTManagement.Server.Models;

namespace VQTManagement.Server.Data
{
    public class UsersDataSeeder
    {
        public static void Seed()
        {
            string jsonFilePath = Path.Combine("Data", "UsersSeedData.json");
            if (!File.Exists(jsonFilePath))
            {
                Console.WriteLine("File not found.");
                return;
            }

            try
            {
                string jsonString = File.ReadAllText(jsonFilePath);
                var users = JsonSerializer.Deserialize<List<Users>>(jsonString);

                foreach (var user in users)
                {
                    Console.WriteLine($"Id: {user.Id}, Name: {user.FirstName} {user.LastName}, Email: {user.Email}, Password: {user.Password},Province: {user.Province},City: {user.City}");
                }
            }
            catch (JsonException ex)
            {
                Console.WriteLine($"JSON Error: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}

