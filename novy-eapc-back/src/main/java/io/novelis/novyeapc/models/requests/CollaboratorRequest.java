package io.novelis.novyeapc.models.requests;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CollaboratorRequest {

    private String code;

    private String firstName;

    private String lastName;

    private String title;

    private String phoneNumber;

    private String email;

}
