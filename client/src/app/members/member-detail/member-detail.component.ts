<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { Member } from 'src/app/_models/member';
import { Message } from 'src/app/_models/message';
import { MembersService } from 'src/app/_services/members.service';
import { MessageService } from 'src/app/_services/message.service';
=======
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { Message } from 'src/app/_models/message';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { MessageService } from 'src/app/_services/message.service';
import { PresenceService } from 'src/app/_services/presence.service';
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
<<<<<<< HEAD
export class MemberDetailComponent implements OnInit {
=======
export class MemberDetailComponent implements OnInit, OnDestroy {
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
  @ViewChild('memberTabs', {static: true}) memberTabs: TabsetComponent;
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  activeTab: TabDirective;
  messages: Message[] = [];
<<<<<<< HEAD

  constructor(private memberService: MembersService, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    // this.loadMember();
=======
  user: User;

  constructor(private route: ActivatedRoute, private messageService: MessageService, public presence: PresenceService, private accountService: AccountService, private router: Router) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
    this.route.data.subscribe(data => {
      this.member = data.member;
    })

    this.route.queryParams.subscribe(params => {
      params.tab ? this.selectTab(params.tab) : this.selectTab(0);
    })

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }]

      this.galleryImages = this.getImages();
  }

  getImages(): NgxGalleryImage[]{
    const imageUrls = [];
    for(const photo of this.member.photos){
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url,
      })
    }
    return imageUrls;
  }

<<<<<<< HEAD
  // loadMember() {
  //   this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
  //     this.member = member;
      
  //   });
  // }

=======
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
  loadMessages() {
    this.messageService.getMessageThread(this.member.username).subscribe(messages => {
      this.messages = messages;
    })
  }

  selectTab(tabId: number) {
    this.memberTabs.tabs[tabId].active = true;
  }

  onTabActivated(data: TabDirective) {
    this.activeTab = data;
    if (this.activeTab.heading === 'Messages' && this.messages.length === 0) { this.loadMessages();
<<<<<<< HEAD
      //this.messageService.createHubConnection(this.user, this.member.username);
    } 
    //else {
      //this.messageService.stopHubConnection();
    //}
=======
      this.messageService.createHubConnection(this.user, this.member.username);
    } 
    else {
      this.messageService.stopHubConnection();
    }
  }

  ngOnDestroy(): void {
    this.messageService.stopHubConnection();
>>>>>>> c656a233555a5b04503e0351f85cf57b0fc6d6ea
  }

}
