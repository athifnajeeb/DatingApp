using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Helpers;
using API.interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class MessageRepository : IMessageRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public MessageRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

<<<<<<< HEAD
=======
        public void AddGroup(Group group)
        {
            _context.Groups.Add(group);
        }

>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
        public void AddMessage(Message message)
        {
            _context.Messages.Add(message);
        }

        public void DeleteMessage(Message message)
        {
            _context.Messages.Remove(message);
        }

<<<<<<< HEAD
        public async Task<Message> GetMessage(int id)
        {
            return await _context.Messages.Include(u => u.Sender)
=======
        public async Task<Connection> GetConnection(string connectionId)
        {
            return await _context.Connections.FindAsync(connectionId);
        }

        public async Task<Group> GetGroupForConnection(string connectionId)
        {
            return await _context.Groups
                .Include(c => c.Connections)
                .Where(c => c.Connections.Any(x => x.ConnectionId == connectionId))
                .FirstOrDefaultAsync();
        }

        public async Task<Message> GetMessage(int id)
        {
            return await _context.Messages
                .Include(u => u.Sender)
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
                .Include(u => u.Recipient)
                .SingleOrDefaultAsync(x => x.Id == id);
        }

<<<<<<< HEAD
        public async Task<PagedList<MessageDto>> GetMessagesForUser(MessageParams messageParams)
        {
            var query = _context.Messages.OrderByDescending(m => m.MessageSent).AsQueryable();

=======
        public async Task<Group> GetMessageGroup(string groupName)
        {
            return await _context.Groups.Include(x => x.Connections).FirstOrDefaultAsync(x => x.Name == groupName);
        }

        public async Task<PagedList<MessageDto>> GetMessagesForUser(MessageParams messageParams)
        {
            var query = _context.Messages
                .OrderByDescending(m => m.MessageSent)
                .AsQueryable();
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
            query = messageParams.Container switch{
                "Inbox" => query.Where(u => u.RecipientUsername == messageParams.Username  && u.RecipientDeleted == false),
                "Outbox" => query.Where(u => u.SenderUsername == messageParams.Username && u.SenderDeleted == false),
                _ => query.Where(u => u.RecipientUsername == messageParams.Username && u.RecipientDeleted == false && u.DateRead == null)
            };
<<<<<<< HEAD
            
=======
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
            var messages = query.ProjectTo<MessageDto>(_mapper.ConfigurationProvider);
            return await PagedList<MessageDto>.CreateAsync(messages, messageParams.PageNumber, messageParams.PageSize);
        }

        public async Task<IEnumerable<MessageDto>> GetMessageThread(string currentUsername, string recipientUsername)
        {
            var messages = await _context.Messages
                .Include(u => u.Sender).ThenInclude(p => p.Photos)
                .Include(u => u.Recipient).ThenInclude(p => p.Photos)
                .Where(m => m.RecipientUsername == currentUsername && m.RecipientDeleted == false
                        && m.Sender.UserName == recipientUsername
                        || m.RecipientUsername == recipientUsername
                        && m.SenderUsername == currentUsername && m.SenderDeleted == false
                ).OrderBy(m => m.MessageSent).ToListAsync();

            var unreadMessages = messages.Where(m => m.DateRead == null && m.RecipientUsername == currentUsername).ToList();
            if(unreadMessages.Any())
            {
                foreach (var message in unreadMessages)
                {
<<<<<<< HEAD
                    message.DateRead = DateTime.Now;
=======
                    message.DateRead = DateTime.UtcNow;
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
                }

                await _context.SaveChangesAsync();
            }

            return _mapper.Map<IEnumerable<MessageDto>>(messages);
        }

<<<<<<< HEAD
=======
        public void RemoveConnection(Connection connection)
        {
            _context.Connections.Remove(connection);
        }

>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}