package com.example.myapplication.fragments;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.example.myapplication.ProfilCollabActivity;
import com.example.myapplication.ProfilEnfantActivity;
import com.example.myapplication.R;
import com.example.myapplication.SuiviQuotidienActivity;
import com.example.myapplication.adapters.CollaborateurAdaptater;
import com.example.myapplication.adapters.EnfantAdapter;
import com.example.myapplication.entities.Role;
import com.example.myapplication.entities.User;
import com.example.myapplication.managers.RoleManager;
import com.example.myapplication.managers.UserManager;
import com.example.myapplication.services.ConnectionBD;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import java.util.ArrayList;


public class ListesEnfants extends Fragment {

    ListView listView;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        EnfantAdapter enfantAdapter;
        ConnectionBD.copyBdFromAssets(getContext());
        ArrayList<User> users = new ArrayList<>();
        ArrayList<Role> roles = RoleManager.getAll(getContext());
        for (Role r : roles) {
            if (r.getTitle().equals("children")) {
                users = UserManager.getByRole(getContext(), r.get_id());
            }
        }
        if (users != null) {
            Log.d("Tag", "successs");
        }
        View view = inflater.inflate(R.layout.fragment_listes_enfants, container, false);
        listView = view.findViewById(R.id.list_enfant);
        enfantAdapter = new EnfantAdapter(getContext(), R.layout.collaborateur_listview, users);
        listView.setAdapter(enfantAdapter);
        enfantAdapter.notifyDataSetChanged();
        ArrayList<User> finalUsers = users;
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String first_name = finalUsers.get(position).getFirst_name();
                String last_name = finalUsers.get(position).getLast_name();
                String birthday = finalUsers.get(position).getBirthday();
                String sexe = finalUsers.get(position).getSex();
                String address = finalUsers.get(position).getAddress();
                String image = finalUsers.get(position).getImg_url();
                Bundle bundle = new Bundle();
                bundle.putString("user_firstname", first_name);
                bundle.putString("user_lastname", last_name);
                bundle.putString("user_birthday", birthday);
                bundle.putString("user_sex", sexe);
                bundle.putString("user_address", address);
                bundle.putString("user_image", image);
                Intent intent = new Intent(getActivity(), ProfilCollabActivity.class);
                intent.putExtra("bundle", bundle);
                startActivity(intent);
            }
        });
        return view;
    }
    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        //you can set the title for your toolbar here for different fragments different titles
        getActivity().setTitle("Listes D'enfants ");
    }
}
